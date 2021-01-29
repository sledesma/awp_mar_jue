// Heap
document.addEventListener("DOMContentLoaded", DOM_Load);

const 
    /**
     * Contenedor HTML para la lista de tareas
     */
    listaTareas = document.querySelector("#listaTareas"),
    /**
     * Campo de búsqueda
     */
    busqueda = document.querySelector('#txtBuscar'),
    /**
     * Convertir una tarea en HTML
     */
    tareaTemplate = ({ nombre, descripcion }) => {
        const li = document.createElement('li');

        const divHeader = document.createElement('div');
        divHeader.className = 'collapsible-header';

        const divHeaderDiv1 = document.createElement('div');

        const iHeader = document.createElement('i');
        iHeader.className = 'material-icons';
        iHeader.innerHTML = 'event_note';

        divHeaderDiv1.appendChild(iHeader);
        divHeaderDiv1.innerHTML += nombre;


        const divHeaderDiv2 = document.createElement('div');

        const aEdit = document.createElement('a');
        aEdit.href = '#';

        aEdit.onclick = function() {
            alert('Editandoo');
        }

        const iEdit = document.createElement('i');
        iEdit.className = 'material-icons';
        iEdit.innerHTML = 'edit';
        aEdit.appendChild(iEdit);

        const aDelete = document.createElement('a');
        aDelete.href = '#';

        aDelete.onclick = function() {
            vmLista.borrar(nombre);
        }

        const iDelete = document.createElement('i');
        iDelete.className = 'material-icons';
        iDelete.innerHTML = 'delete_forever';
        aDelete.appendChild(iDelete);

        divHeaderDiv2.appendChild(aEdit);
        divHeaderDiv2.appendChild(aDelete);

        divHeader.appendChild(divHeaderDiv1);
        divHeader.appendChild(divHeaderDiv2);


        const divBody = document.createElement('div');
        divBody.className = 'collapsible-body';

        const span = document.createElement('span');
        span.innerHTML = descripcion;
        divBody.appendChild(span);


        li.appendChild(divHeader);
        li.appendChild(divBody);


        return li;
    }

  /**
   * Estructura de datos que representa la lista de tareas
   * lista = [
   *        { nombre, descripcion },
   *        { nombre, descripcion },
   *        { nombre, descripcion }
   *    ]
   */
  lista = [
      { nombre: 'Ir al super', descripcion: 'Comparar tomates' },
      { nombre: 'Terminar main.js', descripcion: 'Se esta poniendo heavy' }
  ],
  /**
   * Este objeto vmLista actua como nexo que comunica
   * la fuente de datos (variable lista) con el elemento
   * HTML (listaTareas)
   */
  vmLista = {

    mapItemsToHTML(listaAux = 0) {

        const dataSource = listaAux != 0 ? listaAux : lista;

        listaTareas.innerHTML = '';

        const content = document.createDocumentFragment();

        dataSource.forEach(function(item){
            content.appendChild(tareaTemplate(item));
        });

        listaTareas.appendChild(content);
    },

    agregarItem(tarea) {
        lista.push(tarea);
        this.mapItemsToHTML();
    },

    filtrarItems(busqueda) {
        let result = [];

        result = lista.filter(function(item){
            return  item.nombre.toLowerCase().includes(busqueda.toLowerCase())
        })

        return result;
    },

    borrar(nombre) {
        lista = lista.filter(function(item){
            return item.nombre != nombre
        });
        this.mapItemsToHTML();
    }

  }


// Call-Stack
function DOM_Load() {
	M.Sidenav.init(document.querySelectorAll(".sidenav"), {});
	M.Collapsible.init(document.querySelectorAll(".collapsible"), {});

	M.Modal.init(
		document.querySelector("#modalAgregar"),
		{}
	);

    registerListeners();
    
    vmLista.mapItemsToHTML();
}

function registerListeners() {
	document
		.querySelector("#btnAgregar")
        .addEventListener("click", btnAgregar_Click);
        
    busqueda.addEventListener('keypress', busqueda_KeyPress);

}

function btnAgregar_Click(e) {
    e.preventDefault();
    
    const nombreEl = document.querySelector('#nombreNuevaTarea');
    const descEl = document.querySelector('#descripcionNuevaTarea');

	vmLista.agregarItem({
		nombre: nombreEl.value,
		descripcion: descEl.value,
    });
    
    nombreEl.value = '';
    descEl.value = '';
}

function busqueda_KeyPress(e) {
    if(e.key == 'Enter') {
        vmLista.mapItemsToHTML(
            vmLista.filtrarItems(e.target.value)
        )

        e.target.value = '';
    }
}
