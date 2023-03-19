import { Format } from '../layout/format'
import { Trending } from '../components/trending'
import { Latest } from '../components/latest'
import { Popular } from '../components/popular'
import { Category } from '../components/category'

export default function Home() {
  return (
    <Format>
      <Trending />
      <Latest />
      <Popular />
      <Category />
    </Format>
  )
}
