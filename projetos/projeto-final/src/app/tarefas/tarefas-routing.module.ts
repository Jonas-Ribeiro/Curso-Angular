import { Routes } from "@angular/router";

import { CadastrarTarefaComponent } from "./cadastrar-tarefa/cadastrar-tarefa.component";
import { ListarTarefaComponent } from "./Index";
import { EditarTarefaComponent } from "./editar-tarefa/Index";


export const TarefaRoutes: Routes =[
    {
        path: 'tarefas',
        redirectTo: 'tarefas/Listar'
    },
    {
        path: 'tarefas/listar',
        component: ListarTarefaComponent
    },
    {
        path: 'tarefas/cadastrar',
        component: CadastrarTarefaComponent
    },
    {
        path: 'tarefas/editar/:id',
        component: EditarTarefaComponent
    },
];