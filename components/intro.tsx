import { CMS_NAME } from '../lib/constants'
import { VisSingleContainer, VisTooltip, VisDonut } from '@unovis/react'

const Intro = () => {
  const data = [50, 10, 40];
  const donutValue = (d: number) => d;

  return (
    <section className="flex justify-start">
        <VisSingleContainer data={data}>
          <VisDonut value={donutValue}
          radius={50}
          centralLabel="Blog."
          />
        </VisSingleContainer>

      {/* <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        A statically generated blog example using Next.js and {CMS_NAME}.
      </h4> */}
    </section>
  )
}

export default Intro
