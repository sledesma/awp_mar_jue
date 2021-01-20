document.addEventListener('DOMContentLoaded', DOM_Load);


function DOM_Load() {
    M.Sidenav.init(document.querySelectorAll('.sidenav'), {});
    M.Collapsible.init(document.querySelectorAll('.collapsible'), {});

    const modalBusqueda = M.Modal.init(document.querySelector('#modalBusqueda'), {});
}