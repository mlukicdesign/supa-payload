import React from 'react'
import { getPayload } from 'next/dist/server/api-utils'

export default async function Server() {

    const payload = await getPayload({config})

  return (
    <div>Header</div>
  )
}
