

const DataBase = [
  {
    id: 1,
    value: '10k+',
    type: 'Companies'
  },
  {
    id: 2,
    value: '314',
    type: 'Templates'
  },
  {
    id: 3,
    value: '12M+',
    type: 'Queries'
  }
]

export default function App() {
  return (
    <>
      <main className='flex flex-col font-interFont bg-darkDesaturatedBlue  rounded-lg w-10/12 my-24 dt:flex-row-reverse'>

        <figure className='w-full h-56 relative dt:h-auto dt:w-6/12'>
          <div className='w-full h-full bg-[url("./images/image-header-mobile.jpg")] bg-cover bg-center bg-no-repeat rounded-t-lg dt:bg-[url("./images/image-header-desktop.jpg")] dt:rounded-tl-none dt:rounded-r-lg'/>
          <div className='bg-softViolet w-full h-full absolute top-0 rounded-t-lg opacity-40 dt:rounded-r-lg dt:rounded-tl-none '></div>
        </figure>

        <article className='flex items-center flex-col gap-6 p-4 mt-4 dt:w-6/12 dt:p-14 dt:items-start'>
            <h2 className='text-white text-3xl text-center font-bold dt:text-left dt:text-4xl dt:w-11/12'>Get <span className='text-softViolet font-bold'>insights</span> that help your business grow.</h2>
            <p className='text-whiteSlightlyTransparent text-center dt:text-left dt:w-10/12'>Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</p>
            <div className='flex flex-col gap-6 dt:flex-row dt:w-full dt:flex dt:gap-8 dt:mt-8 dt:pr-24 dt:justify-between'>
              {DataBase.map(e=>{
              return <div key={e.id} className='mt-2'>
                  <p className='text-white text-center text-2xl font-bold dt:text-left'>{e.value}</p>
                  <p className='text-whiteTransparent text-center text-sm tracking-wider font-lexendDecaFont font-bold uppercase'>{e.type}</p>
                </div>
              })}
            </div>
        </article>
      </main>
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/R3ygoski" target='_blank' rel="noreferrer">Bernardo Poggioni</a>.
      </div>
    </>
  )
}