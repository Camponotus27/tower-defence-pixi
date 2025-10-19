# Errores comunes de git

## No esta configurado tu correo ni nombre de usuario

Make sure you configure your "user.name" and "user.email" in git.

Solucion:

```bash
git config --global user.name "luis"
git config --global user.email "elcorreodegot@email.com"
```

## Error al hacer `git pull` en un nuevo proyecto

```bash
hint: You have divergent branches and need to specify how to reconcile them.
hint: You can do so by running one of the following commands sometime before
hint: your next pull:
hint:
hint:   git config pull.rebase false  # merge
hint:   git config pull.rebase true   # rebase
hint:   git config pull.ff only       # fast-forward only
```

Solucion:

```bash
git config pull.rebase false
```