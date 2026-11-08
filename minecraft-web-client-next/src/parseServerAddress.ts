

/** Makes pasted/typed addresses forgiving: Persian/Arabic digits, Persian colon/dot lookalikes, spaces, minecraft:// prefix */
export const normalizeServerAddress = (address: string) => {
  return address
    .trim()
    .replace(/[۰-۹]/g, d => String('۰۱۲۳۴۵۶۷۸۹'.indexOf(d)))
    .replace(/[٠-٩]/g, d => String('٠١٢٣٤٥٦٧٨٩'.indexOf(d)))
    .replace(/[：﹕]/g, ':')
    .replace(/[。٫]/g, '.')
    .replace(/\s+/g, '')
    .replace(/^minecraft:\/\//i, '')
}

export const parseServerAddress = (address: string | undefined, removeHttp = true): ParsedServerAddress => {
  if (!address) {
    return { host: '', isWebSocket: false, serverIpFull: '' }
  }
  address = normalizeServerAddress(address)

  if (/^ws:[^/]/.test(address)) address = address.replace('ws:', 'ws://')
  if (/^wss:[^/]/.test(address)) address = address.replace('wss:', 'wss://')
  const isWebSocket = address.startsWith('ws://') || address.startsWith('wss://')
  if (isWebSocket) {
    return { host: address, isWebSocket: true, serverIpFull: address }
  }

  if (removeHttp) {
    address = address.replace(/^https?:\/\//, '')
  }

  const parts = address.split(':')

  let version: string | null = null
  let port: string | null = null

  for (let i = 0; i < parts.length; i++) {
    const part = parts[i]
    if (/^\d+\.\d+(\.\d+)?$/.test(part)) {
      version = part
      parts.splice(i, 1)
      i--
    }
    if (/^\d+$/.test(part)) {
      port = part
      parts.splice(i, 1)
      i--
    }
  }

  const host = parts.join(':')
  return {
    host,
    ...(port ? { port } : {}),
    ...(version ? { version } : {}),
    isWebSocket: false,
    serverIpFull: port ? `${host}:${port}` : host
  }
}

export interface ParsedServerAddress {
  host: string
  port?: string
  version?: string
  isWebSocket: boolean
  serverIpFull: string
}
