import { Notification } from '@/domain/notifcation/enterprise/entities/notification'
import { NotificationsRepository } from '@/domain/notifcation/application/repositories/notification-repository'

export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  public items: Notification[] = []

  async create(notifcation: Notification) {
    this.items.push(notifcation)
  }
}
