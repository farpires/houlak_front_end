
# Houlak-Challenge

En este repositorio se desarrolla un desafío presentado por la gente de Houlak.

## Descripción del desafio

Utilizando la API de Spotify, se deben listar todos los álbumes (con sus respectivas imágenes) de un artista en particular ordenados descendentemente por popularidad.

El nombre del artista debe ser proporcionado por el usuario desde el frontend. En caso de que exista más de un artista con ese nombre se debe seleccionar el primer artista de la lista.

Por cada solicitud, el backend debe almacenar en la DB la IP del usuario, la fecha de la solicitud y el nombre del artista.​El frontend no debe comunicarse directamente con la API de Spotify. Debe comunicarse con el backend y desde este es que se debe realizar la request a la API de Spotify.

El diseño debe ser responsive.