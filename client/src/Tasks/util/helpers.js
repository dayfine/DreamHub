export const truncate = (msg, len) => {
  if (!msg) return ''
  return msg.length < len ? msg : `${msg.slice(0, len)}...`
}
