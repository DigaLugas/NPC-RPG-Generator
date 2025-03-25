import { Component, OnInit } from '@angular/core';
import { NpcService } from '../../services/npc.service';
import { NPC } from '../../models/npc.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-npc-history',
  templateUrl: './npc-history.component.html',
  styleUrls: ['./npc-history.component.css'],
  standalone: false,
})
export class NpcHistoryComponent implements OnInit {
  savedNpcs: NPC[] = [];
  selectedNpc: NPC | null = null;

  constructor(
    public npcService: NpcService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.npcService.getSavedNpcs().subscribe(npcs => {
      this.savedNpcs = npcs;
    });
  }

  onNpcDeleted(id: string): void {
    this.savedNpcs = this.savedNpcs.filter(npc => npc.id !== id);
    if (this.selectedNpc && this.selectedNpc.id === id) {
      this.selectedNpc = null;
    }
  }

  onNpcEdited(npc: NPC): void {
    // Navegar para o gerador com o NPC selecionado para edição
    // Esta implementação dependeria da sua estrutura de roteamento
    this.router.navigate(['/generator'], { state: { npc } });
  }

  selectNpc(npc: NPC): void {
    this.selectedNpc = npc;
  }

  exportNpcs(): void {
    const dataStr = JSON.stringify(this.savedNpcs, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);

    const exportFileDefaultName = 'npcs.json';

    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  }

  importNpcs(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    const file = fileInput.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const npcs = JSON.parse(e.target?.result as string);

          
          if (Array.isArray(npcs)) {
            npcs.forEach(npc => {
              this.npcService.saveNpc(npc);
            });
            alert(`Importados ${npcs.length} NPCs com sucesso!`);
          } else {
            throw new Error('Formato inválido');
          }
        } catch (error) {
          alert('Erro ao importar arquivo. Verifique se é um JSON válido.');
        }
      };
      reader.readAsText(file);
    }
  }
}
