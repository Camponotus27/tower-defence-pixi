`bash
// comprobar estado area de trabajo
    git status

// selecionas los archivos a subir
git add <path>
    git add . // el punto son todos los archivos

// aceptas los archivos selecioandos para crear un commit o un cambio
    git commit -m "algun mensaje"

// traer desde remoto a local los ultimos cambios
    git pull

// Si apare este error
// fatal: The current branch nombre-de-la-rama has no upstream branch.
// To push the current branch and set the remote as upstream
// ejecutar el comando sujerido como: git push --set-upstream origin nombre-de-la-rama


// emujar a remoto tus cambios locales
    git push

// Crea una rama de trabajo
git checkout -b "nombre-de-la-rama"

// moverte en ramas creadas es 
git checkout main
git checkout nombre-de-la-rama

`