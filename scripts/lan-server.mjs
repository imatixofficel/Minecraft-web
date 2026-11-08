// Local Minecraft server for 2+ players (flying-squid, offline mode). Started by scripts/lan.mjs
import mcServer from 'flying-squid'
import defaultOptions from 'flying-squid/config/default-settings.json' with { type: 'json' }

const port = Number(process.env.MC_PORT) || 25565
const server = mcServer.createMCServer({
  ...defaultOptions,
  'online-mode': false,
  'logging': true,
  'port': port,
  'host': '0.0.0.0',
  'motd': 'Matix Minecraft - local server',
  'max-players': 10,
  'gameMode': Number(process.env.MC_GAMEMODE ?? 1), // 1 = creative, 0 = survival
  'difficulty': 1,
  'everybody-op': true,
  'view-distance': Number(process.env.MC_VIEW_DISTANCE) || 6,
  'worldFolder': process.env.MC_WORLD_FOLDER || 'world-lan',
  'version': process.env.MC_VERSION || defaultOptions.version,
})
server.on('listening', () => console.log(`Minecraft server ready on port ${port} (version ${process.env.MC_VERSION || defaultOptions.version})`))
