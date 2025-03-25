import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NPC } from '../../models/npc.model';
import { NpcService } from '../../services/npc.service';

@Component({
  selector: 'app-npc-display',
  templateUrl: './npc-display.component.html',
  styleUrls: ['./npc-display.component.css'],
  standalone:false,
})
export class NpcDisplayComponent implements OnInit {
  @Input() npc!: NPC;
  @Output() deleteEvent = new EventEmitter<string>();
  @Output() editEvent = new EventEmitter<NPC>();

  constructor(private npcService: NpcService) { }

  ngOnInit(): void {
  }

  deleteNpc(): void {
    if (confirm(`Tem certeza que deseja excluir ${this.npc.nome}?`)) {
      this.npcService.deleteNpc(this.npc.id!);
      this.deleteEvent.emit(this.npc.id);
    }
  }

  editNpc(): void {
    this.editEvent.emit(this.npc);
  }
}
