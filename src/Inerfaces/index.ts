export interface iCongratulationsMessage {
    name: string,
    progressPercentage: number
}

export interface iProgessCard {
    icon: iIcon,
    title: string,
    progressPercentage: number,
    amount: number
}

export interface iIcon {
    icon: any,
    size: number | string,
    backgroundColor: string,
    color: string
}

export interface iTotalRevenue extends iHeading {
    years: string[],
    months: string[],
    verticalValues: number[]
}

export interface iProjectReport extends iHeading {
    year: string,
    amount: number,
    progressPercentage: number
}

export interface iOrderStatistics extends iHeading {
    totalOrders: number,
    totalSales: number,
    weeklyPercentage: number
}


export interface iGrowthData {
    year: string,
    icon: iIcon,
    amount: number,
    overallGrowth: number,
    companyGrowth: number
}

export interface iTransactionData extends iHeading {
    source: string,
    amount: number,
    currency: string,
    boxColor: string
}

export interface iHeading {
    heading: string
}

export interface iTabsData {
    headings: string[],
    data: iTabs[],
}

export interface iOrderStatisticsData extends iHeading {
    icon: iIcon,
    items: string[],
    value: number
}

export interface iTabs {
    amount: number,
    progressPercentage: number,
    differenceToPreviousWeek: number
}

export interface iSideBarData {
    heading: string,
    data: {
        label: string,
        icon: any,
        path: string
    }[]
}

