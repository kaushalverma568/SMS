<template>
    <div class="request-list">
        <h1>Request</h1>
        <div class="list-tabs">
            <Button :transparent="selectedTab === 1" @click="selectedTab = 0">Ongoing</Button>
            <Button :transparent="selectedTab === 0" @click="selectedTab = 1">History</Button>
        </div>
        <div class="search-filters" v-if="selectedTab === 1">
            <SearchInput />
            <Button big transparent dropdown>
                Filter
            </Button>
        </div>
        <div class="list">
            <div class="item" v-for="n in 4" :key="n" :class="{ active: n === 1 }">
                <div class="thumb" />
                <div class="item-infos">
                    <h2>Request title here</h2>
                    <div class="item-date">June 22, 2020</div>
                </div>
                <div class="item-status">
                    <Button small>Processing</Button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Button from './atoms/Button'
import SearchInput from './atoms/SearchInput'

export default {
    name: 'RequestList',
    components: {
        Button,
        SearchInput
    },
    data () {
        return {
            selectedTab: 1
        }
    }
}
</script>

<style lang="scss" scoped>
.request-list {
    width: 366px;
    padding-right: 30px;

    h1 {
        font-size: 30px;
        color: #25282B;
        margin-bottom: 24px;
    }

    .list-tabs {
        display: flex;
        margin-bottom: 24px;

        > button {
            margin-right: 20px;
        }
    }

    .search-filters{
        display: flex;
        button {
            margin-left: 20px;
        }
    }

    .list {
        .item {
            display: flex;
            align-items: center;
            opacity: 0.3;
            margin-bottom: 24px;

            &.active {
                opacity: 1;
            }

            .thumb {
                background: #6063EB;
                height: 50px;
                width: 50px;
                border-radius: 12px;
                margin-right: 16px;
            }

            .item-infos {
                h2 {
                    font-size: 16px;
                    color: #131416;
                    margin: 0 0 12px 0;
                }

                .item-date {
                    font-size: 14px;
                    opacity: 0.5;
                }
            }

            .item-status {
                margin-left: auto;
            }
        }
    }
}
</style>