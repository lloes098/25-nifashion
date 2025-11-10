'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Sparkles, TrendingUp, MapPin, Leaf, Award, Search, SlidersHorizontal, Info } from 'lucide-react'
import { Card } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'

interface Product {
  id: number
  name: string
  brand: string
  price: number
  grade: string
  image: string
  carbonSaved: number
  waterSaved?: number
  shop: string
  year?: number
  rarity?: string
  previousOwners?: number
  condition?: string
}

export default function Home() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const trendingProducts: Product[] = [
    {
      id: 1,
      name: '90s Levi\'s 501 Denim',
      brand: 'Levi\'s',
      price: 89000,
      grade: 'A',
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d',
      carbonSaved: 12.5,
      shop: '빈티지38',
    },
    {
      id: 2,
      name: 'Y2K Butterfly Top',
      brand: 'Archive',
      price: 45000,
      grade: 'B',
      image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105',
      carbonSaved: 8.2,
      shop: '레트로하우스',
    },
    {
      id: 3,
      name: 'Vintage Leather Jacket',
      brand: 'Schott',
      price: 320000,
      grade: 'A',
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5',
      carbonSaved: 25.8,
      shop: '홍대빈티지',
    },
  ]

  const featuredStores = [
    { name: '빈티지38', distance: '50m', active: true, badges: 3 },
    { name: '레트로하우스', distance: '120m', active: true, badges: 5 },
    { name: '홍대빈티지', distance: '200m', active: false, badges: 2 },
  ]

  const allProducts: Product[] = [
    {
      id: 1,
      name: '90s Levi\'s 501 Denim',
      brand: 'Levi\'s',
      price: 89000,
      grade: 'A',
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d',
      carbonSaved: 12.5,
      waterSaved: 2500,
      shop: '빈티지38',
      year: 1995,
      rarity: 'Medium',
      previousOwners: 2,
      condition: '매우 좋음 - 약간의 자연스러운 색 바램',
    },
    {
      id: 2,
      name: 'Y2K Butterfly Top',
      brand: 'Archive',
      price: 45000,
      grade: 'B',
      image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105',
      carbonSaved: 8.2,
      waterSaved: 1800,
      shop: '레트로하우스',
      year: 2001,
      rarity: 'High',
      previousOwners: 1,
      condition: '좋음 - 일부 실밥 느슨함',
    },
    {
      id: 3,
      name: 'Vintage Leather Jacket',
      brand: 'Schott',
      price: 320000,
      grade: 'A',
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5',
      carbonSaved: 25.8,
      waterSaved: 5200,
      shop: '홍대빈티지',
      year: 1989,
      rarity: 'Very High',
      previousOwners: 3,
      condition: '매우 좋음 - 멋진 빈티지 패티나',
    },
    {
      id: 4,
      name: 'Vintage Nike Windbreaker',
      brand: 'Nike',
      price: 65000,
      grade: 'B',
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7',
      carbonSaved: 9.3,
      waterSaved: 2100,
      shop: '타임캡슐',
      year: 1998,
      rarity: 'Medium',
      previousOwners: 2,
      condition: '좋음 - 약간의 사용감',
    },
    {
      id: 5,
      name: 'Vintage Band T-Shirt',
      brand: 'Official Merch',
      price: 55000,
      grade: 'C',
      image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c',
      carbonSaved: 6.5,
      waterSaved: 1500,
      shop: '빈티지38',
      year: 1992,
      rarity: 'Very High',
      previousOwners: 3,
      condition: '보통 - 그래픽 크랙 있음',
    },
    {
      id: 6,
      name: 'Carhartt Work Jacket',
      brand: 'Carhartt',
      price: 120000,
      grade: 'A',
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea',
      carbonSaved: 15.2,
      waterSaved: 3200,
      shop: '레트로하우스',
      year: 2003,
      rarity: 'Low',
      previousOwners: 1,
      condition: '매우 좋음 - 실용적인 빈티지',
    },
  ]

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case 'A':
        return 'border-[#849973] text-[#849973] bg-[#849973]/10'
      case 'B':
        return 'border-[#8AA6A3] text-[#8AA6A3] bg-[#8AA6A3]/10'
      case 'C':
        return 'border-[#C57B57] text-[#C57B57] bg-[#C57B57]/10'
      default:
        return 'border-[#D4D3CE] text-[#6B6B6B] bg-[#E8E7E2]'
    }
  }

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Very High':
        return 'text-[#C57B57]'
      case 'High':
        return 'text-[#849973]'
      case 'Medium':
        return 'text-[#8AA6A3]'
      default:
        return 'text-[#6B6B6B]'
    }
  }

  const handleNavigate = (page: string) => {
    router.push(`/${page}`)
  }

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product)
    // 상세 페이지로 이동하거나 모달을 열 수 있습니다
    // router.push(`/product/${product.id}`)
  }

  return (
    <div className="min-h-screen bg-[#F5F4EF] pb-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#849973] via-[#8AA6A3] to-[#849973] text-white px-6 py-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(197, 123, 87, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(138, 166, 163, 0.3) 0%, transparent 50%)',
          }} />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 opacity-90" />
            <span className="text-sm opacity-90">홍대 빈티지 순환 플랫폼</span>
          </div>
          <h1 className="text-4xl mb-3 tracking-tight">
            Re:Fashion
          </h1>
          <p className="text-base opacity-90 mb-6 max-w-md">
            투명한 거래, 지속가능한 패션, 창의적인 업사이클링
          </p>
          
          {/* Impact Stats */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
              <div className="text-2xl mb-1">1,247</div>
              <div className="text-xs opacity-80">총 거래수</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
              <div className="text-2xl mb-1">42.5kg</div>
              <div className="text-xs opacity-80">탄소 절감</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
              <div className="text-2xl mb-1">89</div>
              <div className="text-xs opacity-80">업사이클링</div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-6 -mt-6 mb-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-4">
          <Card 
            className="p-4 cursor-pointer hover:shadow-lg transition-all bg-white border-0 shadow-md hover:scale-[1.02]"
            onClick={() => handleNavigate('map')}
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#8AA6A3] rounded-2xl flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-xs text-[#6B6B6B]">내 주변</div>
                <div className="text-[#3B3B3B]">매장 찾기</div>
              </div>
            </div>
          </Card>
          
          <Card 
            className="p-4 cursor-pointer hover:shadow-lg transition-all bg-white border-0 shadow-md hover:scale-[1.02]"
            onClick={() => handleNavigate('upcycling')}
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#849973] rounded-2xl flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-xs text-[#6B6B6B]">참여하기</div>
                <div className="text-[#3B3B3B]">업사이클링</div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Trending Products */}
      <div className="px-6 mb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-[#C57B57]" />
            <h2 className="text-xl text-[#3B3B3B]">인기 상품</h2>
          </div>
          
          <div className="grid gap-4">
            {trendingProducts.map((product) => (
              <Card
                key={product.id}
                className="overflow-hidden cursor-pointer hover:shadow-lg transition-all bg-white border-0 shadow-sm hover:scale-[1.01]"
                onClick={() => handleProductClick(product)}
              >
                <div className="flex gap-4">
                  <div className="w-32 h-32 bg-[#E8E7E2] flex-shrink-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="outline" className={`text-xs ${getGradeColor(product.grade)} border`}>
                            등급 {product.grade}
                          </Badge>
                          <span className="text-xs text-[#6B6B6B]">{product.brand}</span>
                        </div>
                        <div className="mb-1 text-[#3B3B3B]">{product.name}</div>
                      </div>
                    </div>
                    <div className="mb-2 text-[#3B3B3B]">{product.price.toLocaleString()}원</div>
                    <div className="flex items-center gap-4 text-xs text-[#6B6B6B]">
                      <div className="flex items-center gap-1">
                        <Leaf className="w-3 h-3 text-[#849973]" />
                        <span>탄소 {product.carbonSaved}kg 절감</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        <span>{product.shop}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Stores */}
      <div className="px-6 mb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <Award className="w-5 h-5 text-[#C57B57]" />
            <h2 className="text-xl text-[#3B3B3B]">주변 매장</h2>
          </div>
          
          <div className="grid gap-3">
            {featuredStores.map((store, idx) => (
              <Card 
                key={idx}
                className="p-4 cursor-pointer hover:shadow-lg transition-all bg-white border-0 shadow-sm hover:scale-[1.01]"
                onClick={() => handleNavigate('map')}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${store.active ? 'bg-[#849973] animate-pulse' : 'bg-[#D4D3CE]'}`} />
                    <div>
                      <div className="mb-1 text-[#3B3B3B]">{store.name}</div>
                      <div className="text-sm text-[#6B6B6B]">{store.distance} • 뱃지 {store.badges}개</div>
                    </div>
                  </div>
                  {store.active && (
                    <Badge variant="secondary" className="text-xs bg-[#C57B57] text-white border-0">
                      의뢰 중
                    </Badge>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* All Products Section */}
      <div className="bg-white border-t border-[#D4D3CE] px-6 py-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl mb-4 text-[#3B3B3B]">상품 둘러보기</h2>
          
          {/* Search */}
          <div className="flex gap-2 mb-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#6B6B6B]" />
              <Input
                type="text"
                placeholder="브랜드, 스타일, 아이템 검색..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-[#F5F4EF] border-[#D4D3CE]"
              />
            </div>
            <Button variant="outline" size="icon" className="border-[#849973] text-[#849973] hover:bg-[#849973]/10">
              <SlidersHorizontal className="w-4 h-4" />
            </Button>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="all" className="w-full mb-6">
            <TabsList className="grid w-full grid-cols-4 bg-[#E8E7E2]">
              <TabsTrigger value="all">전체</TabsTrigger>
              <TabsTrigger value="new">신상품</TabsTrigger>
              <TabsTrigger value="popular">인기</TabsTrigger>
              <TabsTrigger value="sustainable">친환경</TabsTrigger>
            </TabsList>
          </Tabs>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {allProducts.map((product) => (
              <Card
                key={product.id}
                className="overflow-hidden cursor-pointer hover:shadow-lg transition-all group bg-white border-0 shadow-sm"
                onClick={() => handleProductClick(product)}
              >
                {/* Image */}
                <div className="relative h-64 bg-[#E8E7E2] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge className={`${getGradeColor(product.grade)} border`}>
                      등급 {product.grade}
                    </Badge>
                  </div>
                  <div className="absolute top-3 right-3">
                    <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs text-[#3B3B3B]">
                      {product.year}년
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="text-sm text-[#6B6B6B] mb-1">{product.brand}</div>
                      <h3 className="text-lg mb-1 text-[#3B3B3B]">{product.name}</h3>
                      <div className="text-xl text-[#849973] mb-3">
                        {product.price.toLocaleString()}원
                      </div>
                    </div>
                  </div>

                  {/* Sustainability Info */}
                  <div className="bg-[#849973]/10 border border-[#849973]/30 rounded-lg p-3 mb-3">
                    <div className="flex items-center gap-2 mb-2 text-sm text-[#849973]">
                      <Leaf className="w-4 h-4" />
                      <span>환경 절감 효과</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs text-[#6B6B6B]">
                      <div>💨 탄소 {product.carbonSaved}kg</div>
                      <div>💧 물 {product.waterSaved}L</div>
                    </div>
                  </div>

                  {/* Transparency Info */}
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between text-[#6B6B6B]">
                      <span>희소성</span>
                      <span className={getRarityColor(product.rarity || '')}>
                        {product.rarity}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-[#6B6B6B]">
                      <span>이전 소유자</span>
                      <span className="text-[#3B3B3B]">{product.previousOwners}명</span>
                    </div>
                    <div className="flex items-start gap-2 text-[#6B6B6B] pt-2 border-t border-[#E8E7E2]">
                      <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <span className="text-xs">{product.condition}</span>
                    </div>
                  </div>

                  {/* Shop */}
                  <div className="mt-3 pt-3 border-t border-[#E8E7E2]">
                    <div className="text-xs text-[#6B6B6B]">
                      📍 {product.shop}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

