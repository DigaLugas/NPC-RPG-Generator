import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { NpcService } from '../../services/npc.service';
import { NPC } from '../../models/npc.model';

@Component({
  selector: 'app-npc-generator',
  templateUrl: './npc-generator.component.html',
  styleUrls: ['./npc-generator.component.css'],
  standalone: false,
})
export class NpcGeneratorComponent implements OnInit {
  npcForm: FormGroup;
  generatedNpc: NPC | null = null;
  showAdvancedOptions = false;

  racas = ['Humano', 'Elfo', 'Anão', 'Halfling', 'Gnomo', 'Meio-Orc', 'Meio-Elfo', 'Tiefling', 'Draconato'];
  generos = ['Masculino', 'Feminino', 'Outro'];
  ocupacoes = [
    'Ferreiro', 'Comerciante', 'Guarda', 'Aventureiro', 'Curandeiro', 'Ladino', 'Mago',
    'Guerreiro', 'Bardo', 'Paladino', 'Fazendeiro', 'Alquimista', 'Sacerdote', 'Caçador',
    'Escriba', 'Nobre', 'Pescador', 'Minerador', 'Estalajadeiro', 'Marinheiro'
  ];
  personalidades = [
    'Corajoso', 'Astuto', 'Gentil', 'Reservado', 'Impulsivo', 'Sarcástico', 'Leal',
    'Desconfiado', 'Otimista', 'Pessimista', 'Curioso', 'Teimoso', 'Altruísta', 'Egoísta',
    'Paciente', 'Irascível', 'Metódico', 'Caótico', 'Sonhador', 'Pragmático'
  ];

  constructor(
    public fb: FormBuilder,
    public npcService: NpcService
  ) {
    this.npcForm = this.fb.group({
      nome: [''],
      idade: [''],
      raca: [''],
      genero: [''],
      ocupacao: [''],
      personalidade: this.fb.array([]),
      aparencia: this.fb.group({
        altura: [''],
        peso: [''],
        corCabelo: [''],
        corOlhos: [''],
        caracteristicasDistintivas: ['']
      }),
      habilidades: this.fb.array([]),
      motivacao: [''],
      objetivos: this.fb.array([]),
      segredos: this.fb.array([]),
      posses: this.fb.array([]),
      historia: [''],
      notas: ['']
    });
  }

  ngOnInit(): void {
  }

  get personalidadeArray(): FormArray {
    return this.npcForm.get('personalidade') as FormArray;
  }

  get habilidadesArray(): FormArray {
    return this.npcForm.get('habilidades') as FormArray;
  }

  get objetivosArray(): FormArray {
    return this.npcForm.get('objetivos') as FormArray;
  }

  get segredosArray(): FormArray {
    return this.npcForm.get('segredos') as FormArray;
  }

  get possesArray(): FormArray {
    return this.npcForm.get('posses') as FormArray;
  }

  addPersonalidade(): void {
    this.personalidadeArray.push(this.fb.control(''));
  }

  removePersonalidade(index: number): void {
    this.personalidadeArray.removeAt(index);
  }

  addHabilidade(): void {
    this.habilidadesArray.push(this.fb.control(''));
  }

  removeHabilidade(index: number): void {
    this.habilidadesArray.removeAt(index);
  }

  addObjetivo(): void {
    this.objetivosArray.push(this.fb.control(''));
  }

  removeObjetivo(index: number): void {
    this.objetivosArray.removeAt(index);
  }

  addSegredo(): void {
    this.segredosArray.push(this.fb.control(''));
  }

  removeSegredo(index: number): void {
    this.segredosArray.removeAt(index);
  }

  addPosse(): void {
    this.possesArray.push(this.fb.control(''));
  }

  removePosse(index: number): void {
    this.possesArray.removeAt(index);
  }

  toggleAdvancedOptions(): void {
    this.showAdvancedOptions = !this.showAdvancedOptions;
  }

  generateNpc(): void {
    // Coletar parâmetros do formulário (apenas os preenchidos)
    const params: Partial<NPC> = {};

    const formValue = this.npcForm.value;

    if (formValue.nome) params.nome = formValue.nome;
    if (formValue.idade) params.idade = parseInt(formValue.idade);
    if (formValue.raca) params.raca = formValue.raca;
    if (formValue.genero) params.genero = formValue.genero;
    if (formValue.ocupacao) params.ocupacao = formValue.ocupacao;

    if (this.personalidadeArray.length > 0) {
      params.personalidade = this.personalidadeArray.value.filter((p: string) => p.trim() !== '');
    }

    if (this.habilidadesArray.length > 0) {
      params.habilidades = this.habilidadesArray.value.filter((h: string) => h.trim() !== '');
    }

    if (formValue.motivacao) params.motivacao = formValue.motivacao;

    if (this.objetivosArray.length > 0) {
      params.objetivos = this.objetivosArray.value.filter((o: string) => o.trim() !== '');
    }

    if (this.segredosArray.length > 0) {
      params.segredos = this.segredosArray.value.filter((s: string) => s.trim() !== '');
    }

    if (this.possesArray.length > 0) {
      params.posses = this.possesArray.value.filter((p: string) => p.trim() !== '');
    }

    if (formValue.historia) params.historia = formValue.historia;
    if (formValue.notas) params.notas = formValue.notas;

    // Verificar se há valores preenchidos para aparência
    const aparencia = formValue.aparencia;
    if (aparencia.altura || aparencia.peso || aparencia.corCabelo ||
        aparencia.corOlhos || aparencia.caracteristicasDistintivas) {
      params.aparencia = {
        altura: aparencia.altura || '',
        peso: aparencia.peso || '',
        corCabelo: aparencia.corCabelo || '',
        corOlhos: aparencia.corOlhos || '',
        caracteristicasDistintivas: aparencia.caracteristicasDistintivas || ''
      };
    }

    // Gerar o NPC com os parâmetros fornecidos
    this.generatedNpc = this.npcService.gerarNPC(params);
  }

  saveNpc(): void {
    if (this.generatedNpc) {
      this.npcService.saveNpc(this.generatedNpc);
      // Mostrar mensagem de sucesso
      alert('NPC salvo com sucesso!');
    }
  }

  clearForm(): void {
    this.npcForm.reset();

    // Limpar todos os FormArrays
    while (this.personalidadeArray.length) {
      this.personalidadeArray.removeAt(0);
    }

    while (this.habilidadesArray.length) {
      this.habilidadesArray.removeAt(0);
    }

    while (this.objetivosArray.length) {
      this.objetivosArray.removeAt(0);
    }

    while (this.segredosArray.length) {
      this.segredosArray.removeAt(0);
    }

    while (this.possesArray.length) {
      this.possesArray.removeAt(0);
    }

    this.generatedNpc = null;
  }
}
