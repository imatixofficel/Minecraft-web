// Local multiplayer: one command runs everything on this machine
//   1) the game + TCP proxy        -> http://<your-ip>:8080
//   2) a real local Minecraft server (flying-squid, port 25565, offline mode)
// Every player opens the printed address in a browser and presses "Local server (LAN)" in the servers list
// (or types localhost:25565 - the proxy runs on THIS machine, so "localhost" is always the host PC).
// Usage: pnpm build && pnpm start-lan      (env: MC_VERSION=1.20.4 MC_GAMEMODE=0 PORT=8080)
import { spawn } from 'node:child_process'
import { existsSync } from 'node:fs'
import { networkInterfaces } from 'node:os'

const GAME_PORT = process.env.PORT || '8080'

if (!existsSync('dist/index.html')) {
  console.error('dist/ not found. Run `pnpm build` first.')
  process.exit(1)
}

const env = { ...process.env, LOCAL_MC_SERVER: 'localhost:25565' }
const procs = [
  spawn(process.execPath, ['server.js', '--prod', GAME_PORT], { stdio: 'inherit', env }),
  spawn(process.execPath, ['scripts/lan-server.mjs'], { stdio: 'inherit', env }),
]

const ips = Object.values(networkInterfaces()).flat().filter(i => i && i.family === 'IPv4' && !i.internal).map(i => i.address)
console.log('\n=== Matix Minecraft: local multiplayer ===')
console.log(`This PC:        http://localhost:${GAME_PORT}`)
for (const ip of ips) console.log(`Other devices:  http://${ip}:${GAME_PORT}`)
console.log('Then: "Connect to server" -> "Local server (LAN)" (localhost:25565)\n')

const stop = () => procs.forEach(p => p.kill())
process.on('SIGINT', stop)
process.on('SIGTERM', stop)
procs.forEach(p => p.on('exit', code => { stop(); process.exit(code ?? 0) }))
