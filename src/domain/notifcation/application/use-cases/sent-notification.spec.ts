import { InMemoryNotificationsRepository } from 'test/repositories/in-memory-send-notification'
import { SendNotificationUseCase } from './send-notification'

let inMemorySendNotificationRepository: InMemoryNotificationsRepository
let sut: SendNotificationUseCase

describe('Send Notification', () => {
  beforeEach(() => {
    inMemorySendNotificationRepository = new InMemoryNotificationsRepository()
    sut = new SendNotificationUseCase(inMemorySendNotificationRepository)
  })

  it('should be able to send a question', async () => {
    const result = await sut.execute({
      recipientId: '1',
      title: 'Nova notificação',
      content: 'Conteudo da notificação',
    })

    expect(result.isRight()).toBe(true)
    expect(inMemorySendNotificationRepository.items[0]).toEqual(
      result.value?.notification,
    )
  })
})
