import React from 'react'

function FieldsetComponent(props) {
  return (
    <>
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-regal-blue  mx-4 ">
          <div className="space-y-2 col-span-full lg:col-span-1">
            <p className="font-extrabold text-lg text-real-orange">
           {props.title}
            </p>
          </div>
        </fieldset>
      
    </>
  )
}

export default FieldsetComponent
