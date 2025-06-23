export function simpleNanoid() {
  // 1. 时间戳基数（缩短为8位36进制）
  const timePart = Math.floor(Date.now() / 1000)
    .toString(36)
    .slice(-8)

  // 2. 随机数部分（4位36进制）
  const randomPart = Math.floor(Math.random() * 46656) // 36^3
    .toString(36)
    .padStart(3, "0")

  // 3. 计数器（防止同一毫秒内碰撞）
  simpleNanoid.counter = (simpleNanoid.counter || 0) % 46656
  const counterPart = (simpleNanoid.counter++).toString(36).padStart(3, "0")

  return `${timePart}_${randomPart}_${counterPart}`
}
