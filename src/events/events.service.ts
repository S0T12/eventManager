import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EventEntity } from './entities/event.entity';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(EventEntity)
    private readonly _eventRepository: Repository<EventEntity>,
  ) {}

  create(createEventDto) {
    const event = this._eventRepository.create(createEventDto);
    return this._eventRepository.save(event);
  }

  findAll() {
    return this._eventRepository.find();
  }

  findOne(id: number) {
    return this._eventRepository.findOne({ where: { id } });
  }

  async update(id: number, updateEventDto) {
    await this._eventRepository.update(id, updateEventDto);
    return this._eventRepository.findOne({ where: { id } });
  }

  remove(id: number) {
    return this._eventRepository.delete(id);
  }
}
