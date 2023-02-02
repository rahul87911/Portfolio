import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'


export const client = sanityClient({
  projectId: '38z9r6um',
  dataset:'production',
  apiVersion:'2022-02-01',
  useCdn: true,
  token: 'skehcvZ7DNgJPqHdfN6ZcrbQdWU6quhMffWm6qvJ7eLr6XHpxpCXDEAjUdekVymRkqa4gVHbyPFScnrvYtyGNEk4KyQoZthlStha8sQWBRQ6OSsAfPSGpdtVB4tsP90kg5QMQWkFLL5W1kC9MwOK7WX33iRsqG8IoftCsoklHtEgc9nx3nMW',

});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);