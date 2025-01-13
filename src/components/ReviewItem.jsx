import React from 'react'
import { Star, StarHalf } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import formatDate from '@/lib/formatDate'

const ProductReview = ({
  review
}) => {
  const formattedDate = formatDate(review?.posted_at)

  const renderStars = (rating) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<StarHalf key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)
      } else {
        stars.push(<Star key={i} className="w-4 h-4 text-gray-300" />)
      }
    }

    return stars
  }

  return (
    <Card className="w-full max-w-2xl">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <Avatar className="w-10 h-10">
            <AvatarImage src={review?.user?.avatar} alt={review?.fullName} />
            <AvatarFallback>{review?.user?.fullname.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900">{review?.user?.fullname}</p>
            <div className="flex items-center mt-1">
              {renderStars(review?.rating)}
              <span className="ml-2 text-sm text-gray-500">{review?.rating}</span>
            </div>
          </div>
          <div className="text-sm text-gray-500">{formattedDate}</div>
        </div>
        <p className="mt-4 text-sm text-gray-700">{review?.content}</p>
      </CardContent>
    </Card>
  )
}

export default ProductReview

