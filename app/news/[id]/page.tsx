'use client'
import { useNews } from '@/pages/NewsPage/model'
import { Loading } from '@/shared/ui/loading'
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'

const NewsDetails = () => {
  const params = useParams()
  const { getNewsById, isLoading, news } = useNews()
  useEffect(() => {
    getNewsById(params?.id)
  }, [])
  if (isLoading) return <Loading />
  
  return (
    <div>NewsDetails</div>
  )
}
export default NewsDetails