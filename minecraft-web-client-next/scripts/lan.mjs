// Local multiplayer: one command runs everything on this machine
//   - the game itself (dist/) + TCP proxy        -> http://<your-ip>:8080
//   - the P2P signaling relay for friends         -> ws://<your-ip>:8788
// Two players on the same network (or the same PC) open the printed address,
// the first one opens a world and presses "Multiplayer: Invite Friend", the second one opens the copied link.
// Usage: pnpm build && pnpm start-lan
import { spawn } from 'node:child_process'
import { existsSync } from 'node:fs'
import { networkInterfaces } from 'node:os'

const GAME_PORT = process.env.PORT || '8080'
const RELAY_PORT = process.env.RELAY_PORT || '8788'

if (!existsSync('dist/index.html')) {
  console.error('dist/ not found. Run `pnpm build` first.')
  process.exit(1)
}

const env = { ...process.env, LOCAL_P2P_RELAY_PORT: RELAY_PORT }
const procs = [
  spawn(process.execPath, ['server.js', '--prod', GAME_PORT], { stdio: 'inherit', env }),
  spawn(process.execPath, ['scripts/p2pRelayServer.mjs'], { stdio: 'inherit', env: { ...env, PORT: RELAY_PORT, HOST: '0.0.0.0' } }),
]

const ips = Object.values(networkInterfaces()).flat().filter(i => i && i.family === 'IPv4' && !i.internal).map(i => i.address)
console.log('\n=== Matix Minecraft: local multiplayer ===')
console.log(`This PC:        http://localhost:${GAME_PORT}`)
for (const ip of ips) console.log(`Other devices:  http://${ip}:${GAME_PORT}`)
console.log('Note: on other devices (not localhost) the page is not a "secure context"; if joining fails, use Chrome flag')
console.log('      chrome://flags/#unsafely-treat-insecure-origin-as-secure with the address above, or serve over HTTPS.\n')

const stop = () => procs.forEach(p => p.kill())
process.on('SIGINT', stop)
process.on('SIGTERM', stop)
procs.forEach(p => p.on('exit', code => { stop(); process.exit(code ?? 0) }))
