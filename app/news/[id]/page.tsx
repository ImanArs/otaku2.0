'use client'
import { useNews } from '@/components/NewsPage/model'
import { Loading } from '@/shared/ui/loading'
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'

const NewsDetails = () => {
  const params = useParams()
  const { getNewsById, isLoading, news } = useNews()
  useEffect(() => {
    getNewsById(Number(params?.id))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  if (isLoading) return <Loading />
  
  return (
    <div>NewsDetails</div>
  )
}
export default NewsDetails