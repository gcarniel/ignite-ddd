import { Entity } from '@/core/entities/entity'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

interface AttachmentProps {
  name: string
  link: string
}
export class Attachment extends Entity<AttachmentProps> {
  get name() {
    return this.props.name
  }

  get link() {
    return this.props.link
  }

  static create(props: AttachmentProps, id?: UniqueEntityID) {
    const attachment = new Attachment(props, id)

    return attachment
  }
}
