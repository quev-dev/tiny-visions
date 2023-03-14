import imgCard from '../content/images/cardMoon.png';

export default function Title ()
{
  return <header className="flex gap-12 justify-center my-16 items-center mx-auto max-w-xs md:max-w-screen-sm lg:max-w-screen-md">
    <article>
      <h1 className="text-3xl mb-2">Tiny Visions</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing.
        Lorem ipsum dolor sit, amet consectetur adipisicing.
        Lorem ipsum dolor sit amet consectetur adipisicing.
      </p>
    </article>
    <div>
      <img src={imgCard} alt=""/>
    </div>
  </header>
}