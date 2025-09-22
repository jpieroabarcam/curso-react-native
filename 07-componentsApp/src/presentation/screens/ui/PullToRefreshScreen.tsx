import { RefreshControl, ScrollView } from 'react-native'
import { Title } from '../../components/ui/Title'
import { CustomView } from '../../components/ui/CustomView'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useContext, useState } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

export const PullToRefreshScreen = () => {

    const  { colors } = useContext(ThemeContext);

    const [isRefreshing, setIsRefreshing] = useState(false)

    const {top} = useSafeAreaInsets();

    const onRefresh = () => {
        setIsRefreshing(true)

        setTimeout(() => {
            setIsRefreshing(false)
        }, 3000);
    }
  return (
    <ScrollView
        refreshControl={ 
            <RefreshControl 
                refreshing={isRefreshing} 
                progressViewOffset={ top }
                colors = {[colors.primary, 'red', 'orange','green']}
                progressBackgroundColor={ colors.cardBackground}
                tintColor={ colors.primary}
                onRefresh={ onRefresh }
            />
        }
        // style={ [globalStyles.mainContainer, globalStyles.globalMargin]} // solo para ios y quitando CustomView
    >
        <CustomView>
            <Title text='Pull to Refresh' safe/>
        </CustomView>
    </ScrollView>
  )
}
