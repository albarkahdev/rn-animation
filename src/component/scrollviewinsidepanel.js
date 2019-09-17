import React, { useEffect } from 'react'
import { SafeAreaView, Animated, Dimensions, View, TouchableOpacity, Text, ScrollView } from 'react-native'
import { getInset } from 'react-native-safe-area-view';
import SlidingUpPanel from 'rn-sliding-up-panel'

const styles = {
    container: {
        flex: 1,
        zIndex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    dragHandler: {
        alignSelf: 'stretch',
        height: 64,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ccc'
    }
}

export const ScrollViewInsidePanel = (props) => {
    const self = this;
    const slideValue = new Animated.Value(0);
    useEffect(() => {
        setTimeout(() => {
            slideValue.setValue(height / 2)
        }, 400);
    }, []);
    const { width, height } = Dimensions.get('window');
    const landScape = width > height;
    const topPadding = getInset('top', landScape);
    const bottomPadding = getInset('bottom', landScape);
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => self._panel.show()}>
                    <View>
                        <Text>Show</Text>
                    </View>
                </TouchableOpacity>
                <SlidingUpPanel
                    ref={c => (self._panel = c)}
                    animatedValue={slideValue}
                    draggableRange={{
                        top: height - topPadding - bottomPadding,
                        bottom: 0,
                    }}
                    height={height - topPadding}
                >
                    {dragHandler => (
                        <View style={styles.container}>
                            <View style={styles.dragHandler} {...dragHandler}>
                                <Text>Drag handler</Text>
                            </View>
                            <ScrollView>
                                <Text>Here is the content inside panel</Text>
                                <Text>Here is the content inside panel</Text>
                                <Text>Here is the content inside panel</Text>
                                <Text>Here is the content inside panel</Text>
                                <Text>Here is the content inside panel</Text>
                                <Text>Here is the content inside panel</Text>
                                <Text>Here is the content inside panel</Text>
                                <Text>Here is the content inside panel</Text>
                                <Text>Here is the content inside panel</Text>
                                <Text>Here is the content inside panel</Text>
                                <Text>Here is the content inside panel</Text>
                                <Text>Here is the content inside panel</Text>
                                <Text>Here is the content inside panel</Text>
                                <Text>Here is the content inside panel</Text>
                            </ScrollView>
                        </View>
                    )}
                </SlidingUpPanel>
            </View>
        </SafeAreaView>
    )
}
