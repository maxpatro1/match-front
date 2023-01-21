import Header from 'src/components/feed/header'
import ImageBlock from 'src/components/feed/image-block'
import InfoBlock from 'src/components/feed/info-block'
import Screen from 'src/ui/screen'

const Feed = () => {
  return (
    <Screen>
      <Header />
      <ImageBlock />
      <InfoBlock />
    </Screen>
  )
}

export default Feed
