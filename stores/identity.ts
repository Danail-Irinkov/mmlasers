import { defineStore } from 'pinia'

export interface IIdentityState {
  firstName: string
  lastName: string
}

export const useIdentity = defineStore('identity', {
	state: (): IIdentityState => ({
		firstName: 'Danail',
		lastName: 'Irinkov',
	}),
	actions: {
		setFirstName(firstName: string) {
			this.firstName = firstName
		},
		setLastName(lastName: string) {
			this.lastName = lastName
		},
		reset() {
			this.firstName = 'Danail'
			this.lastName = 'Irinkov'
		},
	},
	getters: {
		fullName(): String {
			return `${this.firstName} ${this.lastName}`
		},
	},
})
