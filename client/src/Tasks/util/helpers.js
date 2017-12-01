export const truncate = (msg, len) => msg.length < len ? msg : `${msg.slice(0, len)}...`
