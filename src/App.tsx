import { useFetch } from './hooks'

import { ImageComponent } from './ImageComponent'

export interface IImage {
  albumId: number
  id: number
  title: string
  url: string
  thumbnailUrl: string
}
const url = 'https://jsonplaceholder.typicode.com/photos?_start=0&_limit=10'

function App() {
  const { data, error, loading } = useFetch<IImage[]>(url)

  return (
    <div className='App'>
      <h3 className='heading'>Image Lazy Loading</h3>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Errro</p>
      ) : (
        <>
          {data?.map((image: IImage, i) => (
            <ImageComponent key={image.id + i} {...image} />
          ))}
        </>
      )}
    </div>
  )
}

export default App
