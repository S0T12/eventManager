import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EventEntity } from './entities/event.entity';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(EventEntity)
    private readonly _eventRepository: Repository<EventEntity>,
  ) {}
  create(createEventDto: CreateEventDto) {
    const User = this._eventRepository.create(createEventDto);
    return this._eventRepository.save(User);
  }

  findAll() {
    return this._eventRepository.find();
  }

  findOne(id: number) {
    return this._eventRepository.findOne({ where: { id } });
  }

  update(id: number, updateEventDto: UpdateEventDto) {
    return this._eventRepository.update(id, updateEventDto);
  }

  remove(id: number) {
    return this._eventRepository.delete(id);
  }
}
