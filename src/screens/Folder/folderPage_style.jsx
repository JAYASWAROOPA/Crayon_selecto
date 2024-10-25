import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 20
    },
    documentContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
      padding: 15,
      borderRadius: 10,
      marginBottom: 20,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 5,
      elevation: 3,
    },
    iconContainer: {
      padding: 10,
      backgroundColor: '#F0F3F6',
      borderRadius: 8,
      marginRight: 10,
    },
    icon: {
      height: 25,
      width: 25,
    },
    documentInfo: {
      flex: 1,
    },
    documentName: {
      fontSize: 16,
      fontWeight: '600',
      color: '#111827',
    },
    documentDetails: {
      fontSize: 14,
      color: '#6B7280',
    },
  });
  