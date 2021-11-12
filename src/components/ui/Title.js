import React from 'react'

function Title({children}) {
    return (
        <div>
            <h4 className="font-semibold text-sm mb-4">{children}</h4>
        </div>
    )
}

export default Title
