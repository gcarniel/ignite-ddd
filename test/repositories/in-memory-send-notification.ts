import { Notification } from '@/domain/notification/enterprise/entities/notification'
import { NotificationsRepository } from '@/domain/notification/application/repositories/notification-repository'

export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  public items: Notification[] = []

  async create(notifcation: Notification) {
    this.items.push(notifcation)
  }

  async save(notification: Notification) {
    const itemIndex = this.items.findIndex(
      (item) => item.id === notification.id,
    )

    this.items[itemIndex] = notification
  }

  async findById(notificationId: string) {
    const notification = this.items.find(
      (item) => item.id.toString() === notificationId,
    )

    if (notification) {
      return notification
    }

    return null
  }
}
