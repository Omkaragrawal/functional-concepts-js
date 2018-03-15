let queue = []

function addMessageToQueue(text) {
  const message = {
    date: new Date(),
    text,
  }
  queue.push(message)
  return queue
}
