import React, { useEffect, useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../Redux/store'
import { Box } from '@mui/material'
import CardProduct from '../components/cardProduct/CardProduct'
import { ProductType } from '../types/ProductTypes'

type Props = {}

const Comparison = (props: Props) => {
  const dataRducs = useSelector((state: RootState) => state.comparison.comparison)
  const [data, setdata] = useState<ProductType[] | null>(null)
  useEffect(() => {
    setdata(dataRducs)
  }, [])
  
  return (
    <Box>
      Comparison
      {data && data!.map((prod : ProductType) => {
        return <CardProduct product={prod} />
      })}
      </Box>
  )
}

export default Comparison