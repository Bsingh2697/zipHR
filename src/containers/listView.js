import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator, StyleSheet } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../network';
import { globalStyles } from './../utils/globalStyles';
import { stringConstants } from './../utils/constants/stringConstants';
import ListItemUI from '../components/listItemUI';

const listView = () => {
    const load = useSelector(state => state.loader)
    const dispatch = useDispatch()
    const [posts, setPosts] = useState([])
    const [startEnd, setStartEnd] = useState({
        start : 0,
        end :10
    })
    const [bools, setBools] = useState({
        listLoading : false,
        bottomLoad : false,
        endReached : false,
        refreshing : false,
        noMoreLoader : false,
        networkError : false,
        excep : false
    })

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = () => {
        
        dispatch(fetchPosts(startEnd.start,startEnd.end,response=>{
            if(Object.keys(posts).length == Object.keys(response.data).length)
            {   
                setBools({...bools, bottomLoad : false, endReached : true})
            }
            else {
                setPosts(response.data)
                setStartEnd(prevState =>({...prevState, end : prevState.end+10}))
                setBools({...bools, bottomLoad : false, refreshing : false, noMoreLoader : true, networkError : false})
            }
        },
        error=>{
            setBools({noMoreLoader:true, err : true})
            console.log('Error')
        },
        exception => {
            setBools({noMoreLoader:true, networkError : true})
            console.log('Exception')
        }
        )
        )
    }

    const pullToRefresh = () => {
        setBools({...bools,refreshing:true})
        fetchData()
    }

    const bottomPull = () => {
        bools.endReached ? null : (setBools({...bools, bottomLoad : true}),fetchData())
    }

    return (
        <View style={globalStyles.body}>
            <Text style = {globalStyles.headingStyleBold18}>
                {stringConstants.postomania}
            </Text>
            
            {
                (load && !bools.noMoreLoader)
                ?<View style={styles.activityIndicatorView}>
                    <ActivityIndicator animating size="large"/>
                </View>
                : (load && bools.noMoreLoader && (bools.networkError || bools.err))
                ?  (bools.err
                    ?<View style={styles.activityIndicatorView}>
                        <Text style={globalStyles.headingStyleShadow16}>{stringConstants.sorry}</Text>
                     </View> 
                    :<View style={styles.activityIndicatorView}>
                        <Text style={globalStyles.headingStyleShadow16}>{stringConstants.pleaseconnecttoInternet}</Text>
                     </View>)
                :<FlatList
                data = {posts}
                renderItem={({item})=>(
                    <ListItemUI item = {item}/>
                )}
                extraData = {posts}
                showsVerticalScrollIndicator={false}
                keyExtractor = {item => `${item.id}`}
                ListHeaderComponent = {()=> <View>
                    <Text style={globalStyles.headingStyleShadow16}>{stringConstants.herewego}</Text>
                </View>}
                ItemSeparatorComponent={() => <View style={styles.itemSeparator}></View>}
                ListEmptyComponent = {()=><View style={styles.nopostView}><TouchableOpacity>
                                        <Text style={globalStyles.textMedium15shadow}>{stringConstants.noposts}</Text>
                                    </TouchableOpacity></View>}

                ListFooterComponent = { bools.bottomLoad
                                        ?<View><ActivityIndicator animating size="large"/></View>
                                        :<View style={styles.endList}>
                                            <Text style={[globalStyles.headingStyleShadow16,{alignSelf:'center'}]}>{stringConstants.endofList}</Text>
                                        </View>}
                onEndReached = {bools.bottomLoad ? null : ()=>bottomPull()}
                onEndReachedThreshold={0.3}
                onRefresh={()=>pullToRefresh()}
                refreshing={bools.refreshing}
            />
            }

        </View>
    )
}

const styles = StyleSheet.create({
    itemSeparator : {
        height:0.5,
        opacity:0.3,
        backgroundColor:'black',
        marginVertical:5
    },
    activityIndicatorView:{
        height:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    nopostView:{
        height:'100%',
        justifyContent:'center'
    },
    endList:{
        paddingVertical:20
    }
})

export default listView
