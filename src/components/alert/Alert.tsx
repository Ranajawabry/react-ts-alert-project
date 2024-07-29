
import { X } from 'lucide-react'
import './index.scss'
import { ReactNode } from 'react'
import { alert } from '../../types'

interface IPrps {
type: alert,
title:string,
icon :ReactNode,
description?:string,
children?:ReactNode


}

function Alert({type='alert-danger' ,title , icon, description , children }: IPrps) {
    return (
        <div className={type}>
            <div className="alert-header">
                <div className='title'>
                    {icon}
                    <h4>{title}</h4>
                </div>

                <span className='close'>  <X /> </span>
            </div>

        
            {children?? description}

        </div>
    )
}

export default Alert
