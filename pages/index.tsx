import { Format } from '../layout/format'
import { Section1 } from '../components/section1'
import { Section2 } from '../components/section2'
import { Section3 } from '../components/section3'

export default function Home() {
  return (
    <Format>
      <Section1 />
      <Section2 />
      <Section3 />
    </Format>
  )
}
