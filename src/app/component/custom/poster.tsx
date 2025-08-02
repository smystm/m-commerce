function Poster() {
  return (
    <div className="flex flex-col lg:flex-row gap-4 justify-between items-center">
        <Poster />
    </div>
  )
}

function PosterBox(){
    return(
        <div className="rounded-2xl overflow-hidden w-full">
            
        </div>
    )
}

export { PosterBox , Poster}