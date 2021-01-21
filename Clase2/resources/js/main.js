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
    busqueda = document.querySelector('#busqueda'),
    /**
     * Convertir una tarea en HTML
     */
	tareaTemplate = ({ nombre, descripcion }) => `
    <li> 
    <div class="collapsible-header">
          <div>
              <i class="material-icons">event_note</i>
              ${nombre}
          </div>
          <div>
              <a href="#">
                  <i class="material-icons">edit</i>
              </a>
              <a href="#">
                  <i class="material-icons">delete_forever</i>
              </a>
          </div>
      </div>
    <div class="collapsible-body"><span>${descripcion}</span></div>
  </li>`,
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

    mapItemsToHTML(listaAux = false){

        const dataSource = listaAux != false ? listaAux : lista;

        listaTareas.innerHTML = '';
        dataSource.forEach(function(item){
            listaTareas.innerHTML += tareaTemplate(item);
        })
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
    }

  }

let
    modalBusqueda = false;

// Call-Stack
function DOM_Load() {
	M.Sidenav.init(document.querySelectorAll(".sidenav"), {});
	M.Collapsible.init(document.querySelectorAll(".collapsible"), {});

	modalBusqueda = M.Modal.init(
		document.querySelector("#modalBusqueda"),
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

    document
        .querySelector('#modalTrigger')
        .addEventListener('click', modalTrigger_Click);
}

function btnAgregar_Click(e) {
	e.preventDefault();

	vmLista.agregarItem({
		nombre: "Terminar main.js X2",
		descripcion: "Terminar el modulo bla bla bla",
	});
}

function busqueda_KeyPress(e) {
    if(e.key == 'Enter') {
        vmLista.mapItemsToHTML(
            vmLista.filtrarItems(e.target.value)
        )

        e.target.value = '';
        modalBusqueda.close();
    }
}

function modalTrigger_Click() {
    document.getElementById("busqueda").focus();
}