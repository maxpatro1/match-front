import Header from 'src/components/feed/header'
import ImageBlock from 'src/components/feed/image-block'
import InfoBlock from 'src/components/feed/info-block'
import Screen from 'src/ui/screen'

const Feed = () => {
  return (
    <Screen>
      <Header />
      <ImageBlock
        source={{
          uri: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ama-dablam-mountain-peak-view-from-chola-pass-royalty-free-image-1623254695.jpg'
        }}
      />
      <InfoBlock />
    </Screen>
  )
}

export default Feed
