import { BeagleAngularUIService } from '../types';
import { DefaultSchema } from 'beagle-web';
export declare abstract class AbstractBeagleProvider {
    private service;
    start<Schema = DefaultSchema>(baseUrl: string): void;
    getBeagleUIService(): BeagleAngularUIService<Record<string, Record<string, any>>> | undefined;
}
