import { experience } from '../../data/portfolioData.js'
import SectionHeading from '../ui/SectionHeading.jsx'
import Timeline from '../ui/Timeline.jsx'

export default function Experience() {
  return (
    <section id="work" className="border-t border-line bg-panel px-6 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="02"
          title="Experience"
          description="Where the code has actually run in production."
        />
        <Timeline entries={experience} />
      </div>
    </section>
  )
}
