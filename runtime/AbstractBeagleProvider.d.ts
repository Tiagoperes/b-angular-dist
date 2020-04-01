import { DefaultSchema } from '@zup-it/beagle-web';
import { BeagleAngularConfig, BeagleAngularUIService } from '../types';
export declare abstract class AbstractBeagleProvider {
    private service;
    start<Schema = DefaultSchema>(config: BeagleAngularConfig<Schema>): void;
    getBeagleUIService(): BeagleAngularUIService<Record<string, Record<string, any>>> | undefined;
}
