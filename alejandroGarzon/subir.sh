#!/bin/bash

git add .
read -p "Introduce commit:" mensaje
git commit -m "$mensaje"
git push
echo "Subida a Repositorio Compartido exitosa"
